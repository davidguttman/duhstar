# duhstar

Easily see what's taking up disk space. It's effectively a sorted version of `du -hs *`.

## Example

```
$ duhstar

4.0K    lib64
4.0K    media
4.0K    opt
4.0K    root
4.0K    srv
16K     lost+found
28K     tmp
2.6M    run
5.2M    etc
5.2M    sbin
11M     bin
197M    home
310M    boot
333M    var
1.7G    lib
1.7G    usr
229G    mnt
```

## Usage & Installation

```
$ npx duhstar [/some/path]
```

If you don't have a recent version of npm (> 5.2.0), install first:

```
$ npm i -g duhstar
$ duhstar [/some/path]
```

## License

MIT
