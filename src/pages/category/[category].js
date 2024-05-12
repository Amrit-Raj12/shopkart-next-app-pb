import React, { Suspense, lazy, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Loader from "../../components/loading/loading"
import { useRouter } from "next/router"
import { API_BASE_URL_AUTH } from "../../constants/APIConstants"

const Cateogry = lazy(() => import('../../features/category/index'))
function valuetext(value) {
  return `${value}°C`;
}
export async function getServerSideProps(context) {
  const { category } = context.query
  let data
  try {
    const response = await axios.get(`${API_BASE_URL_AUTH}/api/products/search/${category}`);
    data = response?.data
    // console.log('data', data)
  } catch (error) {
    console.error(error)
  }
  return {
    props: {
      data,
    },
  }
}


const Filter = ({ data }) => {
  const [filterActive, setfilterActive] = useState(false)
  const [toggleBrand, setToggleBrand] = useState(true)
  const [toggleRating, setToggleRating] = useState(true)
  const [value, setValue] = React.useState([1000, 8000]);
  const [products, setProducts] = useState(data)
  const [loading, setLoading] = useState(false)
  const [loadingProduct, setLoadingProduct] = useState(false)
  const [grid, setGrid] = useState(false)
  const [filterData, setFilterData] = useState()

  const [selectedBrands, setSelectedBrands] = useState([])

  const [uniqueBrands, setUniqueBrand] = useState([])

  const router = useRouter();

  const category = router.query.category;

  let brandData = []

  const handleFilters = ({category, filterName, data}) => {
    // console.log('adsadad', category, filterName)
    setLoadingProduct(true);
    setTimeout(() => {
      axios.post(`${API_BASE_URL_AUTH}/api/products/${category}/filterby/${filterName}`, data)
      .then((res) => {
          if (res?.data?.success) {
            setProducts(res?.data?.flData);
            setLoadingProduct(false)
          } else {
            setLoadingProduct(true);
          }
      })
      .catch((err) =>{setLoadingProduct(true); console.log('Error:', err.message)})
    }, 1000);
   
  }

  const handleChange = (event, newValue) => {
    setFilterData({
      name: event.target.name,
      value: event.target.value
    })
    if(event.target.name === 'price') {
      handleFilters({
        category:category,
        filterName: event.target.name,
        data: {
          min: 0,
          max: event.target.value
        }
      })
    }
   
    const filterPrice = products.filter((val) => {
      return val.price < newValue
    })
    setProducts(filterPrice)
    setLoading(!loading)
  };
  const handleLowToHigh = () => {
    const sortedItems = products.sort((a, b) => a.price - b.price);
    setProducts(sortedItems)
    setLoading(!loading)
  }
  const handleHighToLow = () => {
    const sortedItems = products.sort((a, b) => b.price - a.price);
    setProducts(sortedItems)
    setLoading(!loading)

  }
  const handleRating = () => {
    const sortedItems = products.sort((a, b) => a.rating - b.rating);
    setProducts(sortedItems)
    setLoading(!loading)
  }
  useEffect(() => {

  }, [loading])

  useEffect(() => {
    setUniqueBrand([...new Set(products.map(product => product.brand))]);
  }, [])



    // Extracting unique brand names
    // const uniqueBrands = [...new Set(products.map(product => product.brand))];

  // Finding the maximum price
  // const maxPrice = products.reduce((max, product) => (product.price > max ? product.price : max), 0);


  return (
    <Suspense fallback={<Loader />}>
      <Cateogry
        valuetext={valuetext}
        handleRating={handleRating}
        filterActive={filterActive}
        toggleBrand={toggleBrand}
        toggleRating={toggleRating}
        handleLowToHigh={handleLowToHigh}
        setfilterActive={setfilterActive}
        setToggleBrand={setToggleBrand}
        setToggleRating={setToggleRating}
        handleHighToLow={handleHighToLow}
        handleChange={handleChange}
        products={products}
        grid={grid}
        setGrid={setGrid}
        uniqueBrands={uniqueBrands}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        brandData={brandData}
        handleFilters={handleFilters}
        loadingProduct={loadingProduct}
        // maxPrice={maxPrice}
        />
    </Suspense>


  )
}

export default Filter
