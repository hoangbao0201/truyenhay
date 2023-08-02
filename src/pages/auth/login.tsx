
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";

import { addUserHandle, loadingUserHandle } from "@/redux/userSlice";
import MainLayout from "@/components/layouts/MainLayout";

import { NextPageWithLayout } from "../_app";
import { signIn, useSession } from "next-auth/react";

const LoginPage : NextPageWithLayout = () => {

    const { data: session } = useSession()

    // state
    const [dataForm, setDataForm] = useState({
        accout: "",
        password: "",
    });

    // Event Onchange Values
    const eventChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    // Event Submit Form
    const eventSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            accout: dataForm.accout,
            password: dataForm.password,
        });

        console.log(result);
    };

    const handleLogin = async () => {
       
    }

    console.log(session)

    return (
        <div className="px-4 py-4 mx-auto max-w-xl w-full">
            <form onSubmit={eventSubmitForm}>

                <div className="mb-4">
                    <label htmlFor="inputLogin" className="mb-1 block cursor-pointer">Tài khoản</label>
                    <input
                        id="inputLogin"
                        name="accout"
                        value={dataForm.accout}
                        onChange={eventChangeValueInput}
                        className="px-4 py-1 outline-none border focus:border-sky-300 focus:shadow-sky-600/20 focus:shadow-sm w-full rounded-sm h-9"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputPassword" className="mb-1 block cursor-pointer">Mật khẩu</label>
                    <input
                        id="inputPassword"
                        name="password"
                        type="password"
                        value={dataForm.password}
                        onChange={eventChangeValueInput}
                        className="px-4 py-1 outline-none border focus:border-sky-300 focus:shadow-sky-600/20 focus:shadow-sm w-full rounded-sm h-9"
                    />
                </div>

                <button className="border text-center bg-sky-500 hover:bg-sky-600 text-white w-full py-2 rounded-md">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;

// export const getServerSideProps : GetServerSideProps = async (ctx) => {

//     return {
//         props: {}
//     }
// }



LoginPage.getLayout = (page: ReactNode) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
};
