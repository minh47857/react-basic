import { useState } from 'react'

const AddNewProduct = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [size, setSize] = useState()
    const [color, setColor] = useState()
    const [isShowDetail, setIsShowDetail] = useState(true)

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail)
    }

    return (
        <>
            {
                isShowDetail
                    ?
                    <>
                        <fieldset>
                            <legend>AddNewProduct</legend>
                            <div className="input-product">
                                <label>Name: </label>
                                <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
                            </div>
                            <div className="input-product">
                                <label>Price: </label>
                                <input value={price} onChange={(event) => setPrice(event.target.value)} type="text" />
                            </div>
                            <div className="input-product">
                                <label>Size: </label>
                                <input value={size} onChange={(event) => setSize(event.target.value)} type="text" />
                            </div>
                            <div className="input-product">
                                <label>Color: </label>
                                <input value={color} onChange={(event) => setColor(event.target.value)} type="text" />
                            </div>
                            <div>
                                <button>+Add New</button>
                            </div>
                        </fieldset>
                        <div onClick={handleHideShow}>Hide this form</div>
                    </>
                    :
                    <div onClick={handleHideShow}>Show this form</div>
            }

        </>
    )
}
export default AddNewProduct