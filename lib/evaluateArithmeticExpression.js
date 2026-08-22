function syntaxError(expression, index) {
  return new SyntaxError(`Invalid arithmetic expression near index ${index}: ${expression}`);
}

class ArithmeticParser {
  constructor(expression) {
    this.expression = expression;
    this.index = 0;
  }

  parse() {
    const value = this.parseAdditive();
    this.skipWhitespace();
    if (this.index !== this.expression.length) {
      throw syntaxError(this.expression, this.index);
    }
    return value;
  }

  parseAdditive() {
    let value = this.parseMultiplicative();

    while (true) {
      if (this.consume('+')) value += this.parseMultiplicative();
      else if (this.consume('-')) value -= this.parseMultiplicative();
      else return value;
    }
  }

  parseMultiplicative() {
    let value = this.parseUnary();

    while (true) {
      if (this.consume('*')) value *= this.parseUnary();
      else if (this.consume('/')) value /= this.parseUnary();
      else if (this.consume('%')) value %= this.parseUnary();
      else return value;
    }
  }

  parseUnary() {
    if (this.consume('+')) return this.parseUnary();
    if (this.consume('-')) return -this.parseUnary();
    return this.parsePower();
  }

  parsePower() {
    const value = this.parsePrimary();
    return this.consume('**') ? value ** this.parseUnary() : value;
  }

  parsePrimary() {
    if (this.consume('(')) {
      const value = this.parseAdditive();
      if (!this.consume(')')) throw syntaxError(this.expression, this.index);
      return value;
    }

    return this.parseNumber();
  }

  parseNumber() {
    this.skipWhitespace();
    const remaining = this.expression.slice(this.index);
    const match = /^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i.exec(remaining);
    if (!match) throw syntaxError(this.expression, this.index);

    this.index += match[0].length;
    const value = Number(match[0]);
    if (!Number.isFinite(value)) throw syntaxError(this.expression, this.index);
    return value;
  }

  consume(token) {
    this.skipWhitespace();

    if (token === '*' && this.expression.startsWith('**', this.index)) {
      return false;
    }
    if (!this.expression.startsWith(token, this.index)) return false;

    this.index += token.length;
    return true;
  }

  skipWhitespace() {
    while (/\s/.test(this.expression[this.index] ?? '')) this.index += 1;
  }
}

export function evaluateArithmeticExpression(expression) {
  if (typeof expression !== 'string') {
    throw new TypeError('The arithmetic expression must be a string.');
  }
  if (expression.trim() === '') throw syntaxError(expression, 0);
  return new ArithmeticParser(expression).parse();
}
