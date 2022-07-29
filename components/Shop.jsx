import ProductCard from '../components/ProductCard';
// import styles from '../styles/ShopPage.module.css';


const ShopPage = ({ products }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>All Results</h1>
            <div className={styles.cards}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};