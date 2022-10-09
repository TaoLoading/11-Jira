export const handlers: {
    resolver(req: any, res: any, ctx: any): Promise<any>;
    parse?: ((req: import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>) => import("msw/lib/types").ParsedRestRequest | null) | undefined;
    getPublicRequest?: ((req: import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>, parsedRequest: import("msw/lib/types").ParsedRestRequest) => import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>) | undefined;
    predicate: (req: import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>, parsedRequest: import("msw/lib/types").ParsedRestRequest) => boolean;
    defineContext?: ((req: import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>) => import("msw/lib/types/rest").RestContext) | undefined;
    log: (req: import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>, res: import("msw/lib/types/setupWorker/glossary").ResponseWithSerializedHeaders<any>, handler: import("msw/lib/types").RequestHandler<import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>, import("msw/lib/types/rest").RestContext, import("msw/lib/types").ParsedRestRequest, import("msw/lib/types").MockedRequest<import("msw/lib/types/utils/handlers/requestHandler").DefaultRequestBodyType, import("msw/lib/types").RequestParams>, any>, parsedRequest: import("msw/lib/types").ParsedRestRequest) => void;
    shouldSkip?: boolean | undefined;
    getMetaInfo: () => import("msw/lib/types").RequestHandlerMetaInfo<"rest" | "graphql">;
}[];
