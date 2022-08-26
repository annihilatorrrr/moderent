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

import { ChatAdministratorRights } from "grammy/types.ts";

export class InputError extends Error {
  constructor(public readonly message: string, public readonly short: string) {
    super(short);
  }
}

export class RightError extends Error {
  constructor(
    public readonly requiredRights: (keyof ChatAdministratorRights)[],
  ) {
    super();
  }
}
