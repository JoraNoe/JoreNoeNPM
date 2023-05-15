/**
 * 请求返回消息数据
 *
 * @author JoreNoe
 * @date 2023-05-11 10:31:57 . Thursday
 * @export
 * @class ApireturnInfo
 * @template TEntity
 */
export interface ApireturnInfo<TEntity = any> {
    State?: boolean;
    Data?: TEntity;
    Message?: string;
    Status?: boolean;
}