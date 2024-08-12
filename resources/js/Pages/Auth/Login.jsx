import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
  
        <GuestLayout>
            <Head title="Log in" />
            <a href="#" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-cyan-300">
                                        SummerSplash
                                    </span>
                                </a>
                   
            

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div class="flex justify-between m-2">
                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div>
                    <span class="ms-2 text-sm font-extrabold text-gray-600">
                        <Link href={route('password.request')}>Forgot Password?</Link></span>
                </div>
                </div>

                       <div class="flex mt-4 items-center justify-center">
                    <PrimaryButton className="w-full flex" disabled={processing}>
                        Log in
                    </PrimaryButton>
               </div>
                
               {status && <div className="mt-3 text-center font-medium text-sm text-green-600">{status}</div>}

               <div class="flex mt-4">
                    <span class="ms-2 text-sm text-gray-600">Don't have an account?
                         <Link class="text-sm font-extrabold" href={route('register')}>Sign up</Link></span>
               </div>
            </form>
         
        </GuestLayout>
       
    );
}

