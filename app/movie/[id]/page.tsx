export { MoviePage as default, generateStaticParams } from "@/pages/movie"
export { generateMetadata } from "@/pages/movie/model/metadata"
export const revalidate = 3600 // 1hour
export const dynamicParams = true // isr
