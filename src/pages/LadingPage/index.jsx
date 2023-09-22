import { BannerSection } from "../../components/sections/BannerSection"
import { CategoriesSection } from "../../components/sections/CategoriesSection"
import { FormSection } from "../../components/sections/FormSection"

import { ProductsSection } from "../../components/sections/ProductsSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"


export const LandingPage = () => {
    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <CategoriesSection />
                <ProductsSection />
                <FormSection />
            </DefaultTemplate>

        </>
    )
}