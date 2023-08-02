import { ReactNode } from 'react'

import MainLayout from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';
import Head from '@/components/share/Head';
import { GetStaticProps } from 'next';
import { getComicsNew } from '@/services/comics';
import ListComics from '@/components/share/ListComics';
import PageTitle from '@/components/share/PageTitle';
import { WraperLayout } from '@/components/layouts/CommonLayout';
import { PaginationLayout } from '@/components/share/PaginationLayout';


interface HomePageProps {
  comics: any
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ comics }) => {

  // console.log(comics)

  return (
    <>
      <Head />
      <WraperLayout className="py-5">

        <div className='lg:flex -mx-4'>
          <div className="lg:w-8/12 px-4">
            <div className='-mx-4'>
              <PageTitle>Truyện mới cập nhật</PageTitle>
              <ListComics comics={comics}/>
            </div>
            <PaginationLayout countPage={115} currentPage={1} handleChangePage={() => {}}/>
          </div>
          <div className='lg:w-4/12 px-4'>
            <div className=''>right</div>
          </div>
        </div>

      </WraperLayout>
    </>
  )
}

export default HomePage;

export const getStaticProps : GetStaticProps = async (context) => {

  const comics = await getComicsNew();

  return {
    props: {
      comics: comics
    },
  }
}

HomePage.getLayout = (page: ReactNode) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}