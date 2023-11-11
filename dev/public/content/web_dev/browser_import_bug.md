Browsers will not hang but will stop responding to events if an import looks like this:

```import Something from "./path/Something"```

...rather than this:

```import Something from "./path/Something.js"```


Or...if the files simply doesn't exist it will exhibit the same behavior.
