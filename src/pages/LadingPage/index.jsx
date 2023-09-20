import { BannerSection } from "../../components/BannerSection"
import { CategoriesSection } from "../../components/CategoriesSection"
import { Footer } from "../../components/Footer"
import { FormSection } from "../../components/FormSection"
import { Header } from "../../components/Header"
import { ProductsSection } from "../../components/ProductsSection"


export const LandingPage = () => {
    return (
        <>
            <Header />
            <BannerSection />
            <CategoriesSection />
            <ProductsSection />
            <FormSection />
            <Footer />
        </>
    )
}