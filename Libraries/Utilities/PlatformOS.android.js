/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */

'use strict';

export type PlatformSelectSpec<A, I> = {|
  android: A,
  ios: I,
|};

const PlatformOS = {
  OS: 'android',
  select: <A, I>(spec: PlatformSelectSpec<A, I>): A | I => spec.android,
};

module.exports = PlatformOS;
