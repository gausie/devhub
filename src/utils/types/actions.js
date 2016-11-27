/**
 * @flow
 * eslint-disable import/prefer-default-export
 */

export type SET_THEME = 'SET_THEME';
export type LOAD_USER_FEED_REQUEST = 'LOAD_USER_FEED_REQUEST';
export type LOAD_USER_FEED_SUCCESS = 'LOAD_USER_FEED_SUCCESS';
export type LOAD_USER_FEED_FAILURE = 'LOAD_USER_FEED_FAILURE';

export type ActionType =
  | SET_THEME
  | LOAD_USER_FEED_REQUEST
  | LOAD_USER_FEED_SUCCESS
  | LOAD_USER_FEED_FAILURE;

export type Action<T> = {
  type: ActionType,
  payload: T,
};