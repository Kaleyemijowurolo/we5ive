import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewsTab from './ReviewsTab';

const ProductDetails = ({ product }) => {
    return (
        <section className="w-full my-10">
            <Tabs defaultValue="reviews">
                <TabsList>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews & Rating</TabsTrigger>
                    <TabsTrigger value="discussion">Discussion</TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                    <p>{product.description}</p>
                </TabsContent>
                <TabsContent value="reviews">
                    <ReviewsTab product={product} />
                </TabsContent>
                <TabsContent value="discussion">Community Forums - Coming Soon.</TabsContent>
            </Tabs>
        </section>
    );
};

export default ProductDetails;