## Project #3 - GitFind
Search by Username.
Show the following:
Name
Profile Picture
Repositories (Count & The list). If you click on any of the repository, then it will take to github page.
Follower (Count and List). If you click on any name, then take to that user's page on our platform.
Same with Following.
Github joining date.
Location
Note: If we are importing anything from a package, we directly give the package name, however if we are importing anything from our codebase, we import the path using ./ followed by the filename.

## Axios
This is a better way to make API Calls.
This is a very good alternative to fetch.
To install: npm install axios

## Contd. on GitFind
Implementation of the Search functionality.
Implement the Repository List.
Completed the Detail Component showing of data part.
Started with CSS
Color Palette - https://coolors.co/palette/ffffff-00171f-003459-007ea7-00a8e8


## Contd on GitFind Project.
Completed the CSS of most parts.
Added MomentJS to handle the timeformats.
Added conditional rendering to show/hide the components.
Error Handling in case of incorrect Username.

## Complete the GitFind Project.
Fix invalid username showing initially issue.
Footer
Implement showing list of followers and following as well. (Conditional Rendering)
Load more functionality.
Host on Netlify
Hosted URL - https://gitfind-react.netlify.app/
Github Repo - https://github.com/aayusharyan/gitfind
Important Note: When the setState depends on the previous state value, in that case, we need to pass a callback into that function. The callback will accept the current state as it's parameter. If the new state does not depend on the current state, then we can set the state directly.