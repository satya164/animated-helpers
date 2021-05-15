import { Animated } from 'react-native';

type Node = Animated.AnimatedInterpolation;

/**
 * Math
 */

export const abs = (node: Node) => {
  return node.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, 1],
  });
};

export const ceil = (node: Node) => {
  // TODO
};

export const exp = (node: Node) => {
  // TODO
};

export const floor = (node: Node) => {
  // TODO
};

export const log = (node: Node) => {
  // TODO
};

export const min = (a: Node, b: Node) => {
  // TODO
};

export const max = (a: Node, b: Node) => {
  // TODO
};

export const pow = (node: Node) => {
  // TODO
};

export const round = (node: Node) => {
  sub(node, Animated.modulo(node, 1));
};

export const sqrt = (node: Node) => {
  // TODO
};

export const sub = Animated.subtract;

/**
 * Trigonometry
 */

export const acos = (node: Node) => {
  // TODO
};

export const asin = (node: Node) => {
  // TODO
};

export const atan = (node: Node) => {
  // TODO
};

export const cos = (node: Node) => {
  // TODO
};

export const sin = (node: Node) => {
  // TODO
};

export const tan = (node: Node) => {
  // TODO
};

/**
 * Others
 */

 export const clamp = (node: Node, a: number, b: number) => {
  const inputRange = a < b ? [a, b] : [b, a];

  return node.interpolate({
    inputRange,
    outputRange: inputRange,
    extrapolate: 'clamp',
  });
};

/**
 * Use an Animated Node based on a condition.
 *
 * @param conditionNode Animated Node representing the condition, 1 = `true`, 0 = `false`
 * @param ifNode Animated Node to use if the condition is `true`
 * @param elseNode Animated Node to use if the condition is `false`
 */
export const cond = (conditionNode: Node, ifNode: Node, elseNode: Node) => {
  // To implement this behavior, we multiply the ifNode with the conditionNode.
  // So if conditionNode is 0, result will be 0, and if conditionNode is 1,
  // result will be ifNode.
  // Then we multiply reverse of the conditionNode (0 if conditionNode is 1)
  // with the elseNode.
  // So if conditionNode is 0, result will be elseNode node, and if conditionNode is 1,
  // result will be 0.
  // This way, one of them will always be 0, and other one will be the value we need.
  // In the end we add them both together, 0 + value we need = value we need
  return Animated.add(
    Animated.multiply(conditionNode, ifNode),
    Animated.multiply(
      conditionNode.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
      elseNode
    )
  );
};
