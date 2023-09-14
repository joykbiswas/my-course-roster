import PropTypes from 'prop-types'
const Cart = ({selectCourse,totalCost,totalCredit,remaining}) => {
    
    return (
        
        <div className="w-80 m-8 p-3 border-2 border-green-500">
            <div>
                <h1 className='text-xl'>Credit Hour Remaining {remaining} hr</h1>
            </div>
            <hr className='my-3' />
            <h3 className="text-xl font-semibold">Course Name: {selectCourse.length}</h3>
            {
                selectCourse.map(course=>(
                    <li  key={course.id}>{course.title}</li>
                    
                ))
            }
            <hr className='my-3' />
            <h3 className="text-xl font-semibold">Total Credit : {totalCredit}</h3>
            <hr className='my-3' />
            <h3 className="text-xl font-semibold">Total cost:{totalCost}</h3>
        </div>
    );
};

Cart.propTypes={
    selectCourse:PropTypes.array,
    totalCost:PropTypes.object,
    totalCredit:PropTypes.object,
    remaining:PropTypes.object
}

export default Cart;