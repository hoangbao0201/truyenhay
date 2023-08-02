import Link from "next/link";
import { WraperLayout } from "../layouts/CommonLayout";


const Header = () => {

    return (
        <header className="bg-blue-600">
            <div className="w-full h-[50px]">
                <WraperLayout className="flex">

                    <Link title="Truyện tranh online" href={`/`}>
                        <p className="leading-[50px] text-2xl font-bold text-white">
                            TRUYENHAY
                        </p>
                    </Link>

                    <div className="ml-auto flex items-center">
                        <div className="text-white">
                            <Link href={`/auth/login`} className="p-1">Đăng nhập</Link>
                            {" / "}
                            <Link href={`/auth/register`} className="p-1">Đăng kí</Link>
                        </div>
                    </div>
                    
                </WraperLayout>
            </div>
        </header>
    )
}

export default Header;