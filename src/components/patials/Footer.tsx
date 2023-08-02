import Link from "next/link";
import { WraperLayout } from "../layouts/CommonLayout";


const Footer = () => {

    return (
        <footer className="bg-gray-600">
            <div className="w-full py-4">
                <WraperLayout>
                    <div className="pb-4 md:w-4/12 max-md:border-b ">
                        <h1 className="mb-3 text-2xl font-bold text-white">
                            <Link title="Truyện tranh online" href={`/`}>TRUYENHAY</Link>
                        </h1>
                        <p className="text-white">
                            <Link href={`/chinh-sach-bao-mat`}>
                                Chính sách bảo mật
                            </Link>
                        </p>
                        <p className="text-white">
                            <Link href={`/chinh-sach-bao-mat`}>
                                Liên hệ:
                            </Link>
                        </p>
                    </div>

                    <div className="pb-8 md:w-8/12">
                        <h4 className="my-2 text-white font-semibold text-lg">Từ khóa</h4>
                        <ul className="flex flex-wrap gap-2 text-sm whitespace-nowrap text-white [&>li]:p-1 [&>li]:border [&>li]:rounded-sm [&>li]:border-white/80">
                            <li><Link target="_self" href="/">Truyện tranh</Link></li>
                            <li><Link target="_self" href="/">Truyen tranh online</Link></li>
                            <li><Link target="_self" href="/">Đọc truyện tranh</Link></li>
                            <li><Link target="_self" href="/">Truyện tranh hot</Link></li>
                            <li><Link target="_self" href="/">Truyện tranh hay</Link></li>
                            <li><Link target="_self" href="/">Truyện ngôn tình</Link></li>
                            <li><Link target="_self" href="/">Manhwa</Link></li>
                            <li><Link target="_self" href="/">Manga</Link></li>
                            <li><Link target="_self" href="/">Manhua</Link></li>
                            <li><Link target="_self" href="/">truyenqq</Link></li>
                            <li><Link target="_self" href="/">mi2manga</Link></li>
                            <li><Link target="_self" href="/">doctruyen3q</Link></li>
                            <li><Link target="_self" href="/">toptruyen</Link></li>
                            <li><Link target="_self" href="/">cmanga</Link></li>
                            <li><Link target="_self" href="/">vlogtruyen</Link></li>
                            <li><Link target="_self" href="/">blogtruyen</Link></li>
                            <li><Link target="_self" href="/">truyentranhaudio</Link></li>
                            <li><Link target="_self" href="/">vcomi</Link></li>
                        </ul>
                    </div>
                </WraperLayout>
            </div>
        </footer>
    )
}

export default Footer;