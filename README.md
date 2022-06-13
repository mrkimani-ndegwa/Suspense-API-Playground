# Suspense API

This file contains all the changes as per the task set out i.e: 
to discover the 3 core issues in the snippet shared while using Suspense.
 
The 3 issues are as follows:
1. Use of Suspense **WITHOUT** a fallback in the following highlighted section.
```
    return (
    <Suspense> <---- FALLBACK MISSING
      <UserProfile data={data} />
    </Suspense>
  );
```
  
2. Utilizing a **fetch-on-render** implementation as is in the useEffect block of the initial code. The recommendation behind Suspense as an API is to **start fetching** as early as possible or a **render-as-you-fetch** implementation to avert the common waterfall problem associated with the former implementation. This is done on line 39 below.

  ```
    useEffect(() => {
    fetchUserProfile(userId).then((profile) => setData(profile));
  }, [userId, setData])
  
 ```
  
3. Suspense by definition is a **mechanism for data fetching libraries**. As such the previous implementation needed to also take that into account and implement a pattern as on line 44 or referencing the helpers.js file in this gist. This allows the code to hook into the data fetching element of Suspense and really implement the required changes to align with the API recommendation.

4. Another recommendation would be to use the new `SuspenseList` component from the same API. It portends a great future but is  experimental at the moment.


