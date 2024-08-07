import NewTask from './NewTask'

export default function Task({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className='my-2 text-2xl font-bold'>Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (
                <p className='text-stone-800 my-4'>
                    This project does not have any task yet.
                </p>
            )}
            {tasks.length > 0 && (
                <ul className='p-4 mt-4 rounded-md bg-stone-100'>
                    {tasks.map((task) => {
                        return (
                            <li key={task.id} className='flex justify-between my-4'>
                                <span>{task.text}</span>
                                <button onClick={()=>onDelete(task.id)} className='text-stone-800 hover:text-red-500 mx-3'>Clear</button>
                            </li>

                        )
                    })}
                </ul>
            )}


        </section>
    )
}
