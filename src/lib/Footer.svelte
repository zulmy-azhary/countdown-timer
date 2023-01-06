<script lang="ts">
  import Facebook from "../assets/icons/Facebook.svelte";
  import Pinterest from "../assets/icons/Pinterest.svelte";
  import Instagram from "../assets/icons/Instagram.svelte";
</script>

<footer>
  <div class="icons">
    <Facebook />
    <Pinterest />
    <Instagram />
  </div>
  <p>
    Created with 💜 by
    <a
      href="https://github.com/zulmy-azhary"
      target="_blank"
      rel="noreferrer"
      title="Github Profile"
    >
      Zulmy Azhary
    </a>
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }
  a {
    text-decoration: none;
    color: var(--softRed);
  }

  p {
    text-transform: none;
    letter-spacing: 2px;
    font-size: 0.75rem;
    color: var(--grayishBlue);
  }

  @media (min-width: 768px) {
    p {
      letter-spacing: 1px;
      font-size: 1rem;
    }
  }
</style>
