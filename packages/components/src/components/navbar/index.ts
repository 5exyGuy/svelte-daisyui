import _Navbar from './Navbar.svelte';
import NavbarCenter from './NavbarCenter.svelte';
import NavbarEnd from './NavbarEnd.svelte';
import NavbarStart from './NavbarStart.svelte';

(_Navbar as typeof Navbar).Center = NavbarCenter;
(_Navbar as typeof Navbar).End = NavbarEnd;
(_Navbar as typeof Navbar).Start = NavbarStart;

const Navbar = _Navbar as typeof _Navbar & {
    Center: typeof NavbarCenter;
    End: typeof NavbarEnd;
    Start: typeof NavbarStart;
};

export { Navbar, NavbarCenter, NavbarEnd, NavbarStart };
