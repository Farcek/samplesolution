/// <reference path="../../core/.config.d.ts" />
/// <reference path="../../core/.model.d.ts" />

declare namespace sysopapi {

    namespace category {
        namespace list {
            interface IParam {
                page?: number;
                limit?: number;
                search?: string;
            }
            interface IResultItem {
                id?: number;
                name: string
            }
            interface IResult {
                total: number;
                items: IResultItem[];
            }
        }
        namespace create {
            interface IParam {
                id?: number;
                name: string;
            }
            interface IResult {
                status: string;                
            }
        }
    }

}