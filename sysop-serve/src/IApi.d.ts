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
        namespace edit {
            interface IParam {
                id?: number;
                name?: string;
            }
            interface IResult {
                status: string;
                item?: IParam;
            }
        }
        namespace single {
            interface IParam {
                id: number;
            }
            interface IResultItem {
                id?: number;
                name?: string
            }
            interface IResult {
                id?: number;
                item: IResultItem;
            }
        }
        namespace destroy {
            interface IParam {
                id: number;
                name?: string;
            }
            interface IResult {
                status: string;
            }
        }
    }
}
