import Head from "next/head"
import { withLayout } from "../layout/Layout"


function mongoDB() {
  return (
    <>
    <Head>
      <title>Тест | MongoDB</title>
    </Head>
    <div>mongoDB</div>
    </>
  )
}
export default withLayout(mongoDB)