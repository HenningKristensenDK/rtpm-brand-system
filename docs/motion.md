# Motion and animation

Version 2, 2026-11-08. Applies to the website, product UI, marketing
video and Claude Motion exports.

## The bar

Motion is one of the ways RTPM tells its story. The bar is high: a
sequence should make a project director stop scrolling, watch to the
end, and remember it. It should feel premium, calm and confident, the
way the product feels when it works. If a piece of motion would not make
someone stop, it is not worth adding.

The story is always the same one the brand tells: work that used to be
chased, reconstructed and emailed around now happens in one place, an
agent prepares it, a person decides, and the record writes itself. A
scene shows that happening to one real-looking item. The best scenes
show the moment of decision.

## Freedom

This doc sets the bar and the few things that hold everywhere. It does
not set a method. Composition, pacing, camera, transitions, sound
design, what to show and what to leave out are creative decisions, made
fresh for each piece. Use the full range: a single item card that plays
on a page, a sixty-second film with music, a Claude Motion export, a
product walkthrough. Invent new patterns. When one works, add it below
as an example so the next piece can build on it, not as a rule.

## What holds everywhere

1. **The still frame stands on its own.** Under `prefers-reduced-motion`,
   in a screenshot, in a thumbnail, the end state tells the same story.
2. **One scene, one point.** If a scene needs two points, it is two
   scenes, cut together.
3. **The brand holds in every frame.** Palette, Inter on the website,
   the one-highlight rule, one gold action. Motion never adds a second
   highlight or a new colour.
4. **Real-looking content, honest numbers.** Fictional sample data is
   fine and is labelled. Invented metrics are not.
5. **It loads.** On the website a scene stays light: no video autoplay
   in the hero, no sound without a click, and the page still passes its
   performance budget. In film there is no such limit.

## Tokens

Three durations and two easings in `tokens/tokens.css`, for UI and
page-level motion. Film and Claude Motion pieces set their own timing.

| Token | Value | Use |
|---|---|---|
| `--motion-feedback` | 150 ms | Hover, focus, a pill swapping state |
| `--motion-transition` | 350 ms | A state change the eye should follow |
| `--motion-scene` | 600 ms | A panel, a scene step, a reveal |
| `--motion-ease` | cubic-bezier(0.2, 0, 0, 1) | Default: fast start, soft landing |
| `--motion-ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Things leaving the screen |

Hold times between steps are content, not tokens. Give a reader time
to take a step in, usually one to three seconds.

## Sound, for film and video

Sound is part of the story when the format allows it. Calm, confident
music that sits under the piece rather than in front of it. Sound
effects that mark the actions the scene shows: a draft landing, an
approval, a line written to the log. Nothing that sounds like an
advert. Silence is an option and sometimes the stronger one. On the
website, sound only after the viewer asks for it.

## Examples that work

- **Item card, website hero (2026-11).** One item is raised, the agent
  draft appears, Approve is pressed, the status turns, the trail logs
  it. Eight seconds, CSS only, replayable.
- **Three clickable demos, website (2026-11).** One owner on every
  item; chart to item in two clicks; draft, edit, approve. Each ends on
  the personal win for the decision maker.
- **Accounting dataflow, Claude Motion (2026-11).** The reference piece
  for pacing and palette in a film format.

## Change log

- v2 2026-11-08: Rewritten after Henning's note: set the bar (premium,
  memorable, stops the scroll), open the method, add sound for film,
  list the working examples. Tokens unchanged.
- v1 2026-11-08: First version with tokens and principles.
