
const List = ({posts}) => {
    return (
        <>
        {posts?.map((post, index) => {
            return (
                <ul key={index}>
                    <li>{post.title}</li>
                </ul>
            )
        })}
        </>
    )
}
export default List