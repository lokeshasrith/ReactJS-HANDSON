import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { ProductsContext } from "../context/ProductsContext";

function AddProduct() {
    const { addProduct } = useContext(ProductsContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            quantity: "",
            price: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            quantity: Yup.number().required("Required"),
            price: Yup.number().required("Required")
        }),
        onSubmit: async (values) => {
            const newProduct = { id: nanoid(10), ...values };
            await addProduct(newProduct);
            navigate("/products");
        }
    });

    return (
        <div className="container mt-5">
            <h2>Add Product</h2>
            <form onSubmit={formik.handleSubmit} className="mt-3">
                <div className="mb-3">
                    <input className="form-control" name="name" onChange={formik.handleChange} placeholder="Product Name" />
                    {formik.errors.name && <p className="text-danger">{formik.errors.name}</p>}
                </div>
                <div className="mb-3">
                    <input className="form-control" name="quantity" onChange={formik.handleChange} placeholder="Quantity" />
                    {formik.errors.quantity && <p className="text-danger">{formik.errors.quantity}</p>}
                </div>
                <div className="mb-3">
                    <input className="form-control" name="price" onChange={formik.handleChange} placeholder="Price" />
                    {formik.errors.price && <p className="text-danger">{formik.errors.price}</p>}
                </div>
                <button className="btn btn-success" type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;