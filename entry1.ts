function log<T>(options: T) {
  const decorator = (cls: any, context: ClassDecoratorContext) => {
    return cls;
  };
  return decorator;
}

@log("foo")
export class MyClass {}
