import { CircleUser, CircleUserIcon } from "lucide-react"
import { Link } from "react-router-dom"

const HeaderClient = () => {
    return (
        <header className="bg-amber-200 py-4">
            <div className="container w-auto mx-auto">
                <div className="flex justify-between items-center">
                    <div className="logo flex-1">
                        <Link to={'/'} className="font-bold text-2xl">
                            2ISO Studio
                        </Link>
                    </div>

                    <div className="links flex-1 flex justify-center gap-x-4">
                        <Link to={'/'} className="">Trang chủ</Link>
                        <Link to={'/products'} className="">Sản phẩm</Link>
                        <Link to={'/news'} className="">Tin tức</Link>
                        <Link to={'/about'} className="">Giới thiệu</Link>
                    </div>

                    <div className="tools flex-1 flex justify-end gap-x-4">
                        <div className="">
                            <form action="/search">
                                <input
                                    type="search"
                                    className="border-1 rounded-md px-2"
                                    placeholder="Nhập mã hợp đồng, sđt,..."
                                    name="q"
                                />
                            </form>
                        </div>

                        <div className="">
                            <CircleUser />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderClient