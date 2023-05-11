/**
 * 请求返回消息数据
 *
 * @author JoreNoe
 * @date 2023-05-11 10:31:57 . Thursday
 * @export
 * @class ApireturnInfo
 * @template TEntity
 */
export class ApireturnInfo<TEntity = any>{
    public State: boolean;
    public Data: TEntity;
    public Message: string;
    public Status: boolean;
}