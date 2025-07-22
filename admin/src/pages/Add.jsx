import React, { useState } from 'react';
import { assets } from '../assets/assets';
import {backendUrl} from '../App'; // Assuming you have a backend URL defined
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]); 

  const handleSizeClick = (size) => {
    let updatedSizes;
    if (sizes.includes(size)) {
      updatedSizes = sizes.filter(s => s !== size);
      setSizes(updatedSizes);
    } else {
      updatedSizes = [...sizes, size];
      setSizes(updatedSizes);
    }
     
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Token being sent:", token);
      console.log("Token type:", typeof token);
      console.log("Token length:", token?.length);
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));  //cant send in an array so we stringify it
      
      image1 && formData.append("image1", image1);  //only appends if image 1 exists
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post( backendUrl + '/api/product/add', formData, {headers:{token}}) //calling backend to add product

      if(response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')           //after adding input fields are reset
      } else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">
      {/* Upload Images */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img 
              className="w-20" 
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} 
              alt="upload1" 
            />
            <input 
              onChange={(e) => setImage1(e.target.files[0])} 
              type="file" 
              id="image1" 
              hidden 
            />
          </label>
          
          <label htmlFor="image2">
            <img 
              className="w-20" 
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} 
              alt="upload2" 
            />
            <input 
              onChange={(e) => setImage2(e.target.files[0])} 
              type="file" 
              id="image2" 
              hidden 
            />
          </label>
          
          <label htmlFor="image3">
            <img 
              className="w-20" 
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} 
              alt="upload3" 
            />
            <input 
              onChange={(e) => setImage3(e.target.files[0])} 
              type="file" 
              id="image3" 
              hidden 
            />
          </label>
          
          <label htmlFor="image4">
            <img 
              className="w-20" 
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} 
              alt="upload4" 
            />
            <input 
              onChange={(e) => setImage4(e.target.files[0])} 
              type="file" 
              id="image4" 
              hidden 
            />
          </label>
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Product Category, Subcategory, Price */}
      <div className="flex w-full gap-2 text-sm">
        {/* Category */}
        <div>
          <p className="mb-2">Product category</p>
          <select 
            onChange={(e) => setCategory(e.target.value)} 
            className="w-full px-3 py-2"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <p className="mb-2">Sub category</p>
          <select 
            onChange={(e) => setSubCategory(e.target.value)} 
            className="w-full px-3 py-2"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2">Product Price</p>
          <input 
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2" 
            type="number" 
            placeholder="25" 
            required
          />
        </div>
      </div>

      {/* Product Sizes */}
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() => handleSizeClick(size)}
              className={`px-3 py-1 cursor-pointer border ${
                sizes.includes(size)
                  ? "bg-pink-100 text-pink-500"
                  : "bg-slate-200"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
         
      </div>

      {/* Bestseller Checkbox */}
      <div className="flex gap-2 mt-2">
        <input 
          onChange={() => setBestseller(prev => !prev)}
          checked={bestseller}
          type="checkbox" 
          id="bestseller" 
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
        ADD
      </button>
    </form>
  );
};

export default Add;
