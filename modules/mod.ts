/**
 * This file is part of Moderent.
 *
 * Moderent is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moderent is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Afferto General Public License
 * along with Moderent.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Context } from "$utilities";
import { Composer } from "grammy";
import { dirname, fromFileUrl, join } from "path";

export async function load() {
  const composer = new Composer<Context>();
  const path = dirname(fromFileUrl(import.meta.url));
  const directories = [...Deno.readDirSync(path)].filter((v) => v.isDirectory)
    .map((v) => v.name).sort();
  for (
    const directory of directories
  ) {
    const { composer: composer_, initialize } = await import(
      join(path, directory, "mod.ts")
    );
    if (initialize) {
      await initialize();
    }
    if (composer_) {
      composer.use(composer_);
    }
  }
  return composer;
}
