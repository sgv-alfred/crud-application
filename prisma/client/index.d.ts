
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    products: 'products',
    users: 'users',
    transactions: 'transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "products" | "users" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    products?: productsOmit
    users?: usersOmit
    transactions?: transactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    transactions: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ProductsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    products: number
    transactions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UsersCountOutputTypeCountProductsArgs
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    Quantity: number | null
    Price: Decimal | null
    status: number | null
    createdBy: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    Quantity: number | null
    Price: Decimal | null
    status: number | null
    createdBy: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Quantity: number | null
    Description: string | null
    Price: Decimal | null
    status: number | null
    createdBy: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Quantity: number | null
    Description: string | null
    Price: Decimal | null
    status: number | null
    createdBy: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    Name: number
    Quantity: number
    Description: number
    Price: number
    status: number
    createdBy: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    Quantity?: true
    Price?: true
    status?: true
    createdBy?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    Quantity?: true
    Price?: true
    status?: true
    createdBy?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    Name?: true
    Quantity?: true
    Description?: true
    Price?: true
    status?: true
    createdBy?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    Name?: true
    Quantity?: true
    Description?: true
    Price?: true
    status?: true
    createdBy?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    Name?: true
    Quantity?: true
    Description?: true
    Price?: true
    status?: true
    createdBy?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    Name: string
    Quantity: number
    Description: string | null
    Price: Decimal
    status: number
    createdBy: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Quantity?: boolean
    Description?: boolean
    Price?: boolean
    status?: boolean
    createdBy?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | products$transactionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    id?: boolean
    Name?: boolean
    Quantity?: boolean
    Description?: boolean
    Price?: boolean
    status?: boolean
    createdBy?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Quantity" | "Description" | "Price" | "status" | "createdBy", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | products$transactionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      Quantity: number
      Description: string | null
      Price: Prisma.Decimal
      status: number
      createdBy: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends products$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, products$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly Name: FieldRef<"products", 'String'>
    readonly Quantity: FieldRef<"products", 'Int'>
    readonly Description: FieldRef<"products", 'String'>
    readonly Price: FieldRef<"products", 'Decimal'>
    readonly status: FieldRef<"products", 'Int'>
    readonly createdBy: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.transactions
   */
  export type products$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    firstname: number
    lastname: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstname?: true
    lastname?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstname?: true
    lastname?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstname?: true
    lastname?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    firstname: string | null
    lastname: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    products?: boolean | users$productsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "firstname" | "lastname", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | users$productsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      firstname: string | null
      lastname: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends users$productsArgs<ExtArgs> = {}>(args?: Subset<T, users$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly firstname: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.products
   */
  export type users$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    productid: number | null
    quantity: number | null
    totalamt: Decimal | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    userid: number | null
    productid: number | null
    quantity: number | null
    totalamt: Decimal | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    userid: number | null
    productid: number | null
    quantity: number | null
    totalamt: Decimal | null
    dateCreated: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    productid: number | null
    quantity: number | null
    totalamt: Decimal | null
    dateCreated: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    userid: number
    productid: number
    quantity: number
    totalamt: number
    dateCreated: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    userid?: true
    productid?: true
    quantity?: true
    totalamt?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    userid?: true
    productid?: true
    quantity?: true
    totalamt?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    userid?: true
    productid?: true
    quantity?: true
    totalamt?: true
    dateCreated?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    userid?: true
    productid?: true
    quantity?: true
    totalamt?: true
    dateCreated?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    userid?: true
    productid?: true
    quantity?: true
    totalamt?: true
    dateCreated?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    userid: number
    productid: number
    quantity: number
    totalamt: Decimal
    dateCreated: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    productid?: boolean
    quantity?: boolean
    totalamt?: boolean
    dateCreated?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>



  export type transactionsSelectScalar = {
    id?: boolean
    userid?: boolean
    productid?: boolean
    quantity?: boolean
    totalamt?: boolean
    dateCreated?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "productid" | "quantity" | "totalamt" | "dateCreated", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      productid: number
      quantity: number
      totalamt: Prisma.Decimal
      dateCreated: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'Int'>
    readonly userid: FieldRef<"transactions", 'Int'>
    readonly productid: FieldRef<"transactions", 'Int'>
    readonly quantity: FieldRef<"transactions", 'Int'>
    readonly totalamt: FieldRef<"transactions", 'Decimal'>
    readonly dateCreated: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Quantity: 'Quantity',
    Description: 'Description',
    Price: 'Price',
    status: 'status',
    createdBy: 'createdBy'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    productid: 'productid',
    quantity: 'quantity',
    totalamt: 'totalamt',
    dateCreated: 'dateCreated'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const productsOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Description: 'Description'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    Name?: StringFilter<"products"> | string
    Quantity?: IntFilter<"products"> | number
    Description?: StringNullableFilter<"products"> | string | null
    Price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    status?: IntFilter<"products"> | number
    createdBy?: IntFilter<"products"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Quantity?: SortOrder
    Description?: SortOrderInput | SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    users?: usersOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_Description?: productsIdDescriptionCompoundUniqueInput
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    Name?: StringFilter<"products"> | string
    Quantity?: IntFilter<"products"> | number
    Description?: StringNullableFilter<"products"> | string | null
    Price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    status?: IntFilter<"products"> | number
    createdBy?: IntFilter<"products"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "id" | "id_Description">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Quantity?: SortOrder
    Description?: SortOrderInput | SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    Name?: StringWithAggregatesFilter<"products"> | string
    Quantity?: IntWithAggregatesFilter<"products"> | number
    Description?: StringNullableWithAggregatesFilter<"products"> | string | null
    Price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    status?: IntWithAggregatesFilter<"products"> | number
    createdBy?: IntWithAggregatesFilter<"products"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    firstname?: StringNullableFilter<"users"> | string | null
    lastname?: StringNullableFilter<"users"> | string | null
    products?: ProductsListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    firstname?: StringNullableFilter<"users"> | string | null
    lastname?: StringNullableFilter<"users"> | string | null
    products?: ProductsListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    firstname?: StringNullableWithAggregatesFilter<"users"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: IntFilter<"transactions"> | number
    userid?: IntFilter<"transactions"> | number
    productid?: IntFilter<"transactions"> | number
    quantity?: IntFilter<"transactions"> | number
    totalamt?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFilter<"transactions"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
    dateCreated?: SortOrder
    users?: usersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    userid?: IntFilter<"transactions"> | number
    productid?: IntFilter<"transactions"> | number
    quantity?: IntFilter<"transactions"> | number
    totalamt?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFilter<"transactions"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
    dateCreated?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transactions"> | number
    userid?: IntWithAggregatesFilter<"transactions"> | number
    productid?: IntWithAggregatesFilter<"transactions"> | number
    quantity?: IntWithAggregatesFilter<"transactions"> | number
    totalamt?: DecimalWithAggregatesFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
  }

  export type productsCreateInput = {
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    users: usersCreateNestedOneWithoutProductsInput
    transactions?: transactionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    createdBy: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutProductsNestedInput
    transactions?: transactionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    createdBy: number
  }

  export type productsUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
    products?: productsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsCreateInput = {
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
    users: usersCreateNestedOneWithoutTransactionsInput
    products: productsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id?: number
    userid: number
    productid: number
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
  }

  export type transactionsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
    products?: productsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInput = {
    id?: number
    userid: number
    productid: number
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsIdDescriptionCompoundUniqueInput = {
    id: number
    Description: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Quantity?: SortOrder
    Description?: SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Quantity?: SortOrder
    Description?: SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Quantity?: SortOrder
    Description?: SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
    dateCreated?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
    dateCreated?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
    dateCreated?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    totalamt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutProductsInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    connect?: usersWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutProductsInput = {
    create?: XOR<transactionsCreateWithoutProductsInput, transactionsUncheckedCreateWithoutProductsInput> | transactionsCreateWithoutProductsInput[] | transactionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutProductsInput | transactionsCreateOrConnectWithoutProductsInput[]
    createMany?: transactionsCreateManyProductsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<transactionsCreateWithoutProductsInput, transactionsUncheckedCreateWithoutProductsInput> | transactionsCreateWithoutProductsInput[] | transactionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutProductsInput | transactionsCreateOrConnectWithoutProductsInput[]
    createMany?: transactionsCreateManyProductsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    upsert?: usersUpsertWithoutProductsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProductsInput, usersUpdateWithoutProductsInput>, usersUncheckedUpdateWithoutProductsInput>
  }

  export type transactionsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<transactionsCreateWithoutProductsInput, transactionsUncheckedCreateWithoutProductsInput> | transactionsCreateWithoutProductsInput[] | transactionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutProductsInput | transactionsCreateOrConnectWithoutProductsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutProductsInput | transactionsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: transactionsCreateManyProductsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutProductsInput | transactionsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutProductsInput | transactionsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<transactionsCreateWithoutProductsInput, transactionsUncheckedCreateWithoutProductsInput> | transactionsCreateWithoutProductsInput[] | transactionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutProductsInput | transactionsCreateOrConnectWithoutProductsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutProductsInput | transactionsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: transactionsCreateManyProductsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutProductsInput | transactionsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutProductsInput | transactionsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutUsersInput | productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutUsersInput | productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutUsersInput | productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutUsersInput | productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutUsersInput | productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutUsersInput | productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutTransactionsInput
    connect?: productsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type productsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutTransactionsInput
    upsert?: productsUpsertWithoutTransactionsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutTransactionsInput, productsUpdateWithoutTransactionsInput>, productsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateWithoutProductsInput = {
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
    transactions?: transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProductsInput = {
    id?: number
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProductsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
  }

  export type transactionsCreateWithoutProductsInput = {
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutProductsInput = {
    id?: number
    userid: number
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
  }

  export type transactionsCreateOrConnectWithoutProductsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutProductsInput, transactionsUncheckedCreateWithoutProductsInput>
  }

  export type transactionsCreateManyProductsInputEnvelope = {
    data: transactionsCreateManyProductsInput | transactionsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutProductsInput = {
    update: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProductsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
  }

  export type usersUpdateWithoutProductsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type transactionsUpsertWithWhereUniqueWithoutProductsInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutProductsInput, transactionsUncheckedUpdateWithoutProductsInput>
    create: XOR<transactionsCreateWithoutProductsInput, transactionsUncheckedCreateWithoutProductsInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutProductsInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutProductsInput, transactionsUncheckedUpdateWithoutProductsInput>
  }

  export type transactionsUpdateManyWithWhereWithoutProductsInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutProductsInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    id?: IntFilter<"transactions"> | number
    userid?: IntFilter<"transactions"> | number
    productid?: IntFilter<"transactions"> | number
    quantity?: IntFilter<"transactions"> | number
    totalamt?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFilter<"transactions"> | Date | string
  }

  export type productsCreateWithoutUsersInput = {
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    transactions?: transactionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutUsersInput = {
    id?: number
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutUsersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsCreateManyUsersInputEnvelope = {
    data: productsCreateManyUsersInput | productsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutUsersInput = {
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
    products: productsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutUsersInput = {
    id?: number
    productid: number
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
  }

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsCreateManyUsersInputEnvelope = {
    data: transactionsCreateManyUsersInput | transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
  }

  export type productsUpdateManyWithWhereWithoutUsersInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutUsersInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    Name?: StringFilter<"products"> | string
    Quantity?: IntFilter<"products"> | number
    Description?: StringNullableFilter<"products"> | string | null
    Price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    status?: IntFilter<"products"> | number
    createdBy?: IntFilter<"products"> | number
  }

  export type transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersCreateWithoutTransactionsInput = {
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
    products?: productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    id?: number
    username: string
    password: string
    firstname?: string | null
    lastname?: string | null
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type productsCreateWithoutTransactionsInput = {
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    users: usersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutTransactionsInput = {
    id?: number
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
    createdBy: number
  }

  export type productsCreateOrConnectWithoutTransactionsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsUpsertWithoutTransactionsInput = {
    update: XOR<productsUpdateWithoutTransactionsInput, productsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutTransactionsInput, productsUncheckedUpdateWithoutTransactionsInput>
  }

  export type productsUpdateWithoutTransactionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyProductsInput = {
    id?: number
    userid: number
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
  }

  export type transactionsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManyUsersInput = {
    id?: number
    Name: string
    Quantity: number
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    status?: number
  }

  export type transactionsCreateManyUsersInput = {
    id?: number
    productid: number
    quantity: number
    totalamt: Decimal | DecimalJsLike | number | string
    dateCreated?: Date | string
  }

  export type productsUpdateWithoutUsersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsUpdateWithoutUsersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalamt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}