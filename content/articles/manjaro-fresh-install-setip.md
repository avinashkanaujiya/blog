---
title: UX Setup for Manjaro Fresh Installation
updatedAt: 2022-05-15
---
after you do a clean install of manjaro, you would like to make few change to get going.

first, change the Session restore setting under Desktop Sessions to Start with an Empty Session. Doing is neccessary because sometimes you close your linux with something running, that has stopped responding due to some corrupt data or setting. When you start again, that same application might locks the system again after boot as OS would try to reopen it.

using Imupulse Blocker, all the sites that gets downloaded instead of displaying in browser due to XDM. This one is rare & hence optional.

for elegant theming & customisation, follow this two videos & apply the below mentioned components only. But you are free to try what ever you like.
- Edna, Lightly, Flat Remix Icons, Vimix & Mcmojave for Cursors & Roboto Fonts.
- [How To Make Your KDE Plasma Desktop Look Aesthetic - YouTube](https://www.youtube.com/watch?v=qTF9Nmt3iXY&t=1112s)
- [Make Your KDE Plasma Desktop Look Better - YouTube](https://www.youtube.com/watch?v=exQh0_JKBJQ&t=152s)

then install all the proprietary fonts like microsoft fonts & adobe fonts, which is available in AUR.

in some case, baloo extracter causes havoc on system resources, so could disable it to.

install latest & greatest shell, fish, for amazing shell experience.
