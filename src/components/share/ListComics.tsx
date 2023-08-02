import { Fragment } from "react";

import ItemComic from "../patials/ItemComic";


interface ListComicsProps {
    comics: any
}

const ListComics = ({comics} : ListComicsProps) => {

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-2">
            {
                comics && comics?.length>0 && (
                    comics.map((comic: any) => {
                        return (
                            <Fragment key={comic?.id_book}>
                                <ItemComic comic={comic}/>
                            </Fragment>
                        )
                    })
                )
            }
        </div>
    )
}

export default ListComics;