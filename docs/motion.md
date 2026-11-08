# Motion and animation

Version 1, 2026-11-08. Applies to the website, product UI, marketing
video and Claude Motion exports.

## What motion is for

Motion shows work happening: an item is drafted, a person approves it,
the log writes itself, a chart opens into the row behind it. A sequence
like that is a product screen in time, and it is the strongest proof the
brand has. Use it.

Motion is not decoration. Nothing moves because it can.

## Tokens

Three durations and two easings, in `tokens/tokens.css`:

| Token | Value | Use |
|---|---|---|
| `--motion-feedback` | 150 ms | Hover, focus, a pill swapping state |
| `--motion-transition` | 350 ms | A state change the eye should follow: a draft appearing, a status changing |
| `--motion-scene` | 600 ms | A panel sliding in, a scene step, a reveal |
| `--motion-ease` | cubic-bezier(0.2, 0, 0, 1) | Default: fast start, soft landing |
| `--motion-ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Things leaving the screen |

Hold times between steps of a sequence are content, not tokens. Pick
what lets a reader take the step in, usually one to three seconds.

## Principles

1. **The still frame must stand on its own.** Under
   `prefers-reduced-motion`, in a screenshot, or when autoplay fails,
   the end state of a sequence tells the same story. Nothing is only
   visible mid-animation.
2. **One sequence, one point.** A scene shows one change of state. If it
   needs two, it is two scenes.
3. **Short.** A scene on a page finishes within about eight seconds and
   can be replayed. A marketing video can run longer; it is a different
   format.
4. **Everything else holds.** Palette, typography, the one-highlight rule
   and the one-gold-CTA rule apply to every frame. Motion does not
   create a second highlight.
5. **Real content.** Fictional sample data is fine and is labelled as
   such. Invented metrics are not.
6. **Built with what the surface already has.** On the website that is
   CSS and a small driver, no video, no animation library. In video and
   Claude Motion exports, use the format's own tools.

## Not covered on purpose

This file does not prescribe how a scene is composed, which easing goes
on which element, or a step-by-step method. Those are design decisions,
made per piece. If a new pattern works, add it here as an example rather
than a rule.

## Change log

- v1 2026-11-08: First version. Tokens added to `tokens.css` and
  `tokens.json`; section 7 of `marketing-rules.md` points here.
