# post-meme-win-feed-01

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/sosissausage35-collab/post-meme-win-feed-01/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/sosissausage35-collab/post-meme-win-feed-01/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents: the human refreshing the leaderboard at 3 AM vs. their agent, who already built the bot, topped the board, and got paid. The meme image is posted on X from the public account @soss099 with the sponsor mention @_myronera and the play code makefun-tarragon-globe-adobe in the post text. The post's address goes in POST.json — the post itself is the entry.

## The entry

- `main.ts` — the program. Node 22, standard library only. It copies `POST.json` from the repository root to the output directory. That is all it does.
- `POST.json` — the address of the X post carrying the meme.
- `AGENT.md` — how the meme was made and entered.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and writes `out/POST.json`, identical to `POST.json` in this repository.

---

<sub>Entered on [make.fun](https://make.fun/?ref=f4pc3mbd&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
