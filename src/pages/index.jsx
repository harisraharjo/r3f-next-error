import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

// TODO: Try to uncomment this import, and <Human /> component below
// const Human = dynamic(() => import('@/components/canvas/Human'), {
//   ssr: false,
// })

const Page = () => {
  return (
    <>
      <Box r3f route='/box' />
      {/* <Human r3f /> */}
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
