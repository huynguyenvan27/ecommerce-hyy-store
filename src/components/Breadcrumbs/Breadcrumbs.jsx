import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from "react-router-dom";
import { selectAllProducts } from '../../store/slices/product.slice';
import { useSelector } from 'react-redux';
import './Breadcrumbs.css' 
import { useEffect } from 'react';


const Seperate = () => {
    const products = useSelector(selectAllProducts)
    const DynamicUserBreadcrumb = ({ match }) => {
        const product = products.find(item => match.params.productId == item.id);
        if(product){
            return <span>{product.name}</span>
        }
        };
    
    const routes = [
      { path: `/sneaker/:productId`, breadcrumb: DynamicUserBreadcrumb },
      { path: '/accessory', breadcrumb: 'Phụ kiện' },
      { path: '/sneaker', breadcrumb: 'Sneaker' },
      { path: '/blog', breadcrumb: 'Tin tức' },
      { path: '/about-us', breadcrumb: 'Chúng tôi' },
      { path: '/contact', breadcrumb: 'Liên hệ' },
      { path: '/checkout', breadcrumb: 'Thanh toán' },
      { path: '/cart', breadcrumb: 'Giỏ hàng' },
      { path: '/wishlist', breadcrumb: 'Yêu thích' },
    ];


    const breadcrumbs = useBreadcrumbs(routes);

    return (
    <>
        <div id="seperate" className="position-relative">
            <div className="seperate-block position-absolute">
                <h1 className=" text-center  main-name">Hyy Store</h1>
                <div className='text-center'>
                    {breadcrumbs.map(({
                                    match,
                                    breadcrumb
                                }) => (
                                    <span key={match.pathname} className="text-center  category-name">
                                    <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                                    </span>
                                ))}
                </div>
            </div>
        </div>
 
    </>
  );
};


export default Seperate;