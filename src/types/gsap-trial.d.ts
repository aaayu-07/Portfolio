declare module "gsap-trial/SplitText" {
  type SplitTextTarget =
    | string
    | Element
    | Array<string | Element>
    | NodeList
    | ArrayLike<string | Element>;

  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: SplitTextTarget, vars?: Record<string, unknown>);
    revert(): void;
  }
}
