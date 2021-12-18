
const Nav = () => {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <a><img src="https://app.doctegrity.com/static/media/logo-dark.0ce46e93.svg" class="h-8 ml-2 mt-2" /></a>
                <a className="pt-2 pl-2 text-xl"><i class="fas fa-bars"></i></a>
            </div>
            <div className="flex">


                <select  className="border-none bg-none">
                    <option value="item-1" className="border-none bg-none">Spanish</option>
                    <option value="item-2" className="border-none bg-none">English</option>
                    <option value="item-3">German</option>
                    <option value="item-4">Italian</option>
                    <option value="item-4">Japan</option>
                </select>
                <a className="p-4 text-xl"><i class="far fa-bell"></i></a>
                <img className="h-12 pt-2 pr-2" src="https://app.doctegrity.com/static/media/default-avatar.ea5eeaeb.svg" alt="image" class="h-10" />
                <select>
                    <option>user</option>
                    <option>Log Out</option>
                </select>

            </div>
        </div>
    )
}

export default Nav
