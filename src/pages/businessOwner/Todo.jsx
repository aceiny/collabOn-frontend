const TodoList = () => {
    const tasks = []

    return ( 
        <div>
            {tasks.map(task =>(
                <miniTask />
            ))}

        </div>
     );
}
const miniTask = ({taskContent, taskDate})=>{
    return(
        <div>
            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor=""></label>
            </div>
            <p></p>
        </div>
    )
}
 
export default TodoList;