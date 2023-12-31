import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";

const Navbar = () => {
    return (
        <div className="fixed w-full z-10 bg-white shadow-sm">
            <div className="border-b-[1px] py-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo></Logo>
                        <Search></Search>
                        <div className="">
                        <MenuDropdown></MenuDropdown>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;