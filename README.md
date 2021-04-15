# react-native-template

### Empty react-native init project

#### with generate-react-cli preconfigured
- some templates is in, to make generation of components and redux reducer easy

## Usage
- clone git repository
    - git clone http://repoAddress.git
- install dependencies
    - npm install
- run project
    - npm run android
    - npm run ios
### use command to generate components or reducer

 - npm run <u>componentType</u> *ComponentName*

#### Components type
- class 
- function
- hook
- rxreducer
## <u>Command line detail</u>

- npm run component componentName :
    - for basic class component in 'App/components/ComponentName'
    - with imported stylesheet file
    - with test file
    
- npm run class componentName :
    - for lifecycle class component in 'App/components/ComponentName'
    - with imported stylesheet file
    - with test file
    
- npm run function componentName :
    - for basic function component in 'App/components/ComponentName'
    - with imported stylesheet file
    - with test file
    
- npm run hook componentName:
    - for state hooked function component in 'App/components/ComponentName'
    - with imported stylesheet file
    - with test file
    
- npm run rxreducer reducerName:
    - for redux reducer in 'App/reducers/ReducerName' 
