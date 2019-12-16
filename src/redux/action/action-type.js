/**
 * 使用Symbol的原因是: 当项目大了之后, 命名可能会发生冲突, 所以使用Symbol获得一个唯一的地址
 * */

export const INCREASE = Symbol("increase");
export const DECREASE = Symbol("decrease");
export const SET = Symbol("set");