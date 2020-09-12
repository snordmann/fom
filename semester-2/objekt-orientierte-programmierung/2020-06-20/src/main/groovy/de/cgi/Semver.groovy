package de.cgi;

//import java.util.regex.Pattern;

class Semver {
  private int major;
  private int minor;
  private int patch;
  private String prerelease;
  private String meta;

  // Semantic version regex that extracts informatino from capture groups
  // Ref: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  private static Pattern semverRegex = ~/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

  public Semver() {
    this(0,0,0,"","");
  }

  public Semver(String semver) {
    def (_,  major, minor, patch, prerelease, meta) = (semver =~ Semver.semverRegex)[0];
    this(
      Integer.parse(major),
      Integer.parse(minor),
      Integer.parse(patch),
      prerelease,
      meta
    );
  }

  public Semver(int major_, int minor_, int patch_, String prerelease_, String meta_) {
    this.setSemver(major_ )
  }

  private SemVer setSemver(int major_, int minor_, int patch_, String prerelease_, String meta_) {
    this.major      = major_;
    this.minor      = minor_;
    this.patch      = patch_;
    this.prerelease = prerelease_;
    this.meta       = meta_;
  }

  public String toString() {
    String prereleaseString = prerelease ?: "-${prerelease}";
    String metaString       = meta       ?: "+${meta}";
    return "${major}.${minor}.${patch}${prereleaseString}${metaString}";
  }

}​
