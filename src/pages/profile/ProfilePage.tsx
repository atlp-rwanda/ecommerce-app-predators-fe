import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, getProfile } from '../../redux/action/profileAction';
import { toast } from 'react-toastify';
import profilePhoto from "./../../assets/dashboard/account_photo.jpg";
import {Sidebar} from '../../components';
import { Link } from 'react-router-dom';
import Notification from '../../components/notification/Notification';

interface profileData {
    name: string,
    email: string,
    gender: string,
    phone_number: string | null,
    country: string | null,
    province: string | null,
    district: string | null,
    sector: string | null,
    streetAddress: string | null,
    preferred_language: string | null,
    preferred_currency: string | null,
  }

export default function ProfilePage() {
    const Dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState<string | null>('');
    const [country, setCountry] = useState<string | null>('');
    const [province, setProvince] = useState<string | null>('');
    const [district, setDistrict] = useState<string | null>('');
    const [sector, setSector] = useState<string | null>('');
    const [street, setStreet] = useState<string | null>('');
    const [language, setLanguage] = useState<string | null>('');
    const [currency, setCurrency] = useState<string | null>('');
    const [Loading, setLoading] = useState<boolean | null>(false);
    const [initialProfile, setInitialProfile] = useState<profileData | null>(null);

    

    const setInitialValues = (profile: profileData) => {
        setName(profile?.name);
        setEmail(profile?.email);
        setGender(profile?.gender);
        setPhone(profile?.phone_number);
        setCountry(profile?.country);
        setProvince(profile?.province);
        setDistrict(profile?.district);
        setSector(profile?.sector);
        setStreet(profile?.streetAddress);
        setLanguage(profile?.preferred_language);
        setCurrency(profile?.preferred_currency);
      };

    useEffect(() => {
        Dispatch(getProfile() as any)
    }, [])

    const Profile = useSelector((state: any) => state.updateProfile.data.data )

    useEffect(() => {
        if (Profile) {
            setInitialValues(Profile);
            setInitialProfile(Profile);
        }
    }, [Profile]);

    let isFormDirty =
    initialProfile !== null &&
    (name !== initialProfile.name ||
      email !== initialProfile.email ||
      gender !== initialProfile.gender ||
      phone !== initialProfile.phone_number ||
      country !== initialProfile.country ||
      province !== initialProfile.province ||
      district !== initialProfile.district ||
      sector !== initialProfile.sector ||
      (street !== initialProfile.streetAddress) ||
      language !== initialProfile.preferred_language ||
      currency !== initialProfile.preferred_currency);

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        setName(inputValue);
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        setEmail(inputValue);
    }

    function handleGenderChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        setGender(inputValue);
    }

    function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setPhone(inputValue);
    }

    function handleDistrictChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setDistrict(inputValue);
    }
    function handleCountryChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setCountry(inputValue);
    }
    function handleProvinceChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setProvince(inputValue);
    }

    function handleSectorChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setSector(inputValue);
    }

    function handleStreetChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setStreet(inputValue);
    }

    function handleLanguageChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setLanguage(inputValue);
    }

    function handleCurrencyChange(e: ChangeEvent<HTMLInputElement>) {
        let inputValue: string | null = e.target.value;
        if (inputValue === '') {
            inputValue = null
        }
        setCurrency(inputValue);
    }

    let profile: profileData = {
        name,
        email,
        gender,
        phone_number: phone,
        country,
        province,
        district,
        sector,
        streetAddress: street,
        preferred_language: language,
        preferred_currency: currency,
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        setLoading(true);

        
        if (name.trim() === '') {
            toast.error('Please enter your name');
            setLoading(false);
            return;
        }

        if (email.trim() === '') {
            toast.error('Please enter your email');
            setLoading(false);
            return;
        }

        if (gender.trim() === '') {
            toast.error('Please enter your gender');
            setLoading(false);
            return;
        }

        Dispatch(updateProfile(profile) as any)
        .then(() => {
            setLoading(false);
            isFormDirty = false;

        })
        .catch((error: any) => {
            console.log(error)
        })
    }

  return (
    <div className="profile h-full">
        <Sidebar />
        <div className=' relative md:ml-52 flex flex-col sm:flex-row sm:h-full'>
            <div className="sm:relative flex-1 w-[90%] sm:w-full self-center sm:self-start secondary-menu mt-5 sm:mt-0 sm:max-w-xs sm:min-w-[280px] sm:h-screen">
                <ul className='sm:fixed flex sm:flex-col sm:px-10 justify-between sm:justify-center sm:h-full sm:gap-10'>
                    <li className="update-profile">
                        <Link to={''} className='flex gap-5 justify-between text-primary'>
                            <div className='flex gap-5'><i className='material-symbols-rounded cursor-pointer hidden sm:inline-block'>account_circle</i><span className='text-sm sm:text-[16px]'>Update Profile</span></div><i className='material-symbols-rounded cursor-pointer hidden min-[480px]:inline-block rotate-90 sm:rotate-0 '>keyboard_arrow_right</i>
                        </Link>
                    </li>
                    <li className="security-update">
                        <Link to={''} className='flex gap-5 justify-between text-primary'>
                            <div className='flex gap-5'><i className='material-symbols-rounded cursor-pointer hidden sm:inline-block'>security</i><span className='text-sm sm:text-[16px]'>Security</span></div><i className='material-symbols-rounded cursor-pointer hidden min-[480px]:inline-block rotate-90 sm:rotate-0 '>keyboard_arrow_right</i>
                        </Link>
                    </li>
                    <li className="change-password">
                        <Link to={''} className='flex gap-5 justify-between text-primary'>
                            <div className='flex gap-5'><i className='material-symbols-rounded cursor-pointer hidden sm:inline-block'>key</i><span className='text-sm sm:text-[16px]'>Change password</span></div><i className='material-symbols-rounded cursor-pointer hidden min-[480px]:inline-block rotate-90 sm:rotate-0 '>keyboard_arrow_right</i>
                        </Link>
                    </li>
                </ul>
                <hr className='min-[639px]:hidden'/>
            </div>
            <div className='flex-1 px-16 flex flex-col h-full justify-between items-center gap-8 sm:border-l'>
                <div className="main-content pt-5">
                    <div className='flex mb-10 justify-end gap-10 items-center flex-wrap'>
                        <div className="dashboard__notification flex gap-7 text-blue-500 justify-self-end">
                            <i className="material-symbols-rounded cursor-pointer">message</i>
                            <Notification />
                        </div>
                        <div className=" dashboard__photo hidden lg:block rounded-full overflow-hidden w-10 h-10">
                            <img src={profilePhoto} alt="profile_photo" className='object-cover' />
                        </div>
                    </div>
                    <h1 className='font-semibold text-xl mb-5'>Profile</h1>
                    <p className=' text-gray-500 text-xs font-light'>This information will be displayed publicly be careful what you share.</p>
                    <div className="profile_image flex justify-center my-5">
                        <div className=" dashboard__photo rounded-full overflow-hidden w-20 h-20">
                            <img src={profilePhoto} alt="profile_photo" className='object-cover' />
                        </div>
                    </div>
                    <div className="personal_information mt-10">
                        <form>
                            <div className='flex flex-col gap-3 sm:gap-5'>
                                <p className=' text-gray-500 text-xs font-light'>Personal Information</p>
                                <div className='flex flex-wrap gap-3 sm:gap-8'>
                                    <input type="text" defaultValue={Profile?.name} onChange={handleNameChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Name'/>
                                    <input type="text" defaultValue={Profile?.email} onChange={handleEmailChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Email'/>
                                </div>
                                <div className='flex flex-wrap gap-3 sm:gap-8'>
                                    <input type="text" defaultValue={Profile?.gender} onChange={handleGenderChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Gender'/>
                                    <input type="text" defaultValue={Profile?.phone_number} onChange={handlePhoneChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Phone Number'/>
                                </div>
                                <div className='flex flex-wrap gap-3 sm:gap-8'>
                                    <input type="text" defaultValue={Profile?.preferred_language} onChange={handleLanguageChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Preferred Language'/>
                                    <input type="text" defaultValue={Profile?.preferred_currency} onChange={handleCurrencyChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Preferred Currency'/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 sm:gap-5 mt-10'>
                                <p className=' text-gray-500 text-xs font-light'>Personal Address</p>
                                <div className='flex flex-wrap gap-3 sm:gap-8'>
                                    <input type="text" defaultValue={Profile?.country} onChange={handleCountryChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Country'/>
                                    <input type="text" defaultValue={Profile?.province} onChange={handleProvinceChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Province'/>
                                </div>
                                <div className='flex flex-wrap gap-3 sm:gap-8'>
                                    <input type="text" defaultValue={Profile?.district} onChange={handleDistrictChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='District'/>
                                    <input type="text" defaultValue={Profile?.sector} onChange={handleSectorChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Sector'/>
                                </div>
                                <div className='flex flex-wrap gap-3 sm:gap-8'>
                                    <input type="text" defaultValue={Profile?.streetAddress} onChange={handleStreetChange} className='focus:outline-none focus:border-tertiary border border-black/10 rounded-lg outline-0 text-sm placeholder:font-light placeholder:text-sm placeholder:text-primary p-2 pl-4' placeholder='Street Address'/>
                                    <div className='flex gap-3'>
                                        <button type="button" className=' h-[40px] px-[1.6rem] rounded-lg border border-tertiary/75 text-tertiary shadow shadow-tertiary/25 disabled:cursor-no-drop text-xs font-light'>Cancel</button>
                                        <button type="button" onClick={handleSubmit} className=' h-[40px] px-[1.6rem] rounded-lg bg-tertiary text-white shadow text-xs font-light disabled:cursor-no-drop disabled:bg-tertiary/40' disabled={!isFormDirty}>{Loading ? "Loading ..." : "Save"}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex justify-center mb-10'>
                    <Link to={''} className=' text-tertiary flex items-center gap-3 text-sm'>
                        <i className='material-symbols-rounded cursor-pointer'>arrow_back</i><span>Home</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
