import { useState } from 'react'

const AddNewProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState("")
    const [isShowDetail, setIsShowDetail] = useState(false)

    const handleClickButton = () => {
        let object = {
            name, price, size, color
        }
        let productList = localStorage.getItem("productList")
        if(productList) {
            let arr = JSON.parse(productList)
            arr.push(object)
            localStorage.setItem("productList", JSON.stringify(arr))
        }
        else {
            localStorage.setItem("productList", JSON.stringify([object]))
        }
        setName("")
        setPrice(0)
        setSize(0)
        setColor("")
    }

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
                            <button onClick={handleClickButton}>+Add New</button>
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